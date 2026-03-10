import { Button, TextField } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom";

function compareJson(obj1: any, obj2: any, path = "") {
  let diffs: any[] = [];
  const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
  allKeys.forEach((key) => {
    const currentPath = path ? `${path}.${key}` : key;
    if (!(key in obj2)) {
      diffs.push({ type: "removed", path: currentPath, value: obj1[key] });
    } else if (!(key in obj1)) {
      diffs.push({ type: "added", path: currentPath, value: obj2[key] });
    } else if (typeof obj1[key] === "object" && obj1[key] !== null && typeof obj2[key] === "object" && obj2[key] !== null) {
      diffs = diffs.concat(compareJson(obj1[key], obj2[key], currentPath));
    } else if (obj1[key] !== obj2[key]) {
      diffs.push({ type: "changed", path: currentPath, oldValue: obj1[key], newValue: obj2[key] });
    }
  });
  return diffs;
}

function getDiffType(diffs: any, key: string, side: any, parentPath = "") {
  const currentPath = parentPath ? `${parentPath}.${key}` : key;
  const found = diffs.find((diff: any) => diff.path === currentPath);

  if (!found) return "normal";
  if (found.type === "added" && side === "right") return "added";
  if (found.type === "removed" && side === "left") return "removed";
  if (found.type === "changed") return "changed";
  return "normal";
}

const highlightStyle = {
  changed: { background: "rgba(251, 146, 60, 0.2)", color: "#fb923c", fontWeight: "bold" as const, marginLeft: "20px" },
  added: { background: "rgba(74, 222, 128, 0.2)", color: "#4ade80", fontWeight: "bold" as const, marginLeft: "20px" },
  removed: { background: "rgba(248, 113, 113, 0.2)", color: "#f87171", fontWeight: "bold" as const, marginLeft: "20px" },
  normal: { marginLeft: "20px" },
};

function renderJson(obj: any, diffs: any, side: any, path: string = "") {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {Array.isArray(obj) ? "[" : "{"}
      {Object.entries(obj).map(([key, value], i) => {
        const pa = path ? `${path}.${key}` : key;
        const diffType = getDiffType(diffs, key, side, path);
        return (
          <li key={i} style={highlightStyle[diffType]}>
            {key}: {typeof value === "object" && value !== null
              ? renderJson(value, diffs, side, pa)
              : JSON.stringify(value)}
          </li>
        );
      })}
      {Array.isArray(obj) ? "]" : "}"}
    </ul>
  );
}

const JsonDiff = () => {
  const [old, setOld] = useState("");
  const [newJson, setNewJson] = useState("");
  const [diff, setDiff] = useState(null as any);
  const [compared, setCompared] = useState(false);
  const [msg, setMsg] = useState("");

  const onChangeOld = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOld(event.target.value);
    setDiff(null);
    setCompared(false);
  };
  const onChangeNew = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewJson(event.target.value);
    setDiff(null);
    setCompared(false);
  };
  const findDiff = () => {
    try {
      setDiff(compareJson(JSON.parse(old), JSON.parse(newJson)));
      setCompared(true);
      setMsg("");
    } catch {
      setMsg("Entered JSON is invalid");
    }
  };

  return (
    <section className="section" style={{ paddingTop: "calc(var(--nav-height) + 48px)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Tool</span>
          <h2 className="section-title">JSON Diff Checker</h2>
          <p className="section-subtitle">Compare two JSON objects and visualize the differences.</p>
        </div>

        <div style={{ display: "flex", gap: "24px", marginBottom: "24px", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 300px" }}>
            <TextField
              name="oldJson"
              multiline
              rows={10}
              value={old}
              onChange={onChangeOld}
              fullWidth
              placeholder="Paste original JSON"
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "var(--text-primary)",
                  backgroundColor: "var(--bg-card)",
                  borderRadius: "var(--radius-md)",
                  "& fieldset": { borderColor: "var(--border)" },
                  "&:hover fieldset": { borderColor: "var(--border-hover)" },
                  "&.Mui-focused fieldset": { borderColor: "var(--accent)" },
                },
              }}
            />
          </div>
          <div style={{ flex: "1 1 300px" }}>
            <TextField
              name="newJson"
              multiline
              rows={10}
              value={newJson}
              onChange={onChangeNew}
              fullWidth
              placeholder="Paste modified JSON"
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "var(--text-primary)",
                  backgroundColor: "var(--bg-card)",
                  borderRadius: "var(--radius-md)",
                  "& fieldset": { borderColor: "var(--border)" },
                  "&:hover fieldset": { borderColor: "var(--border-hover)" },
                  "&.Mui-focused fieldset": { borderColor: "var(--accent)" },
                },
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
          <Button
            variant="contained"
            onClick={findDiff}
            sx={{
              background: "var(--accent)",
              borderRadius: "var(--radius-full)",
              textTransform: "none",
              fontWeight: 600,
              px: 4,
              "&:hover": { background: "var(--accent-dark)" },
            }}
          >
            Compare
          </Button>
          <Link to="/projects" className="btn btn-secondary" style={{ fontSize: "0.875rem", padding: "8px 20px" }}>
            ← Back to Projects
          </Link>
        </div>

        {msg && <p style={{ color: "#f87171", marginTop: "16px" }}>{msg}</p>}

        {diff && compared && Object.keys(diff).length > 0 && (
          <div style={{ marginTop: "32px" }}>
            <h4 style={{ color: "var(--text-primary)", marginBottom: "16px" }}>Differences</h4>
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 300px", overflow: "auto", maxHeight: "500px", padding: "20px", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", color: "var(--text-secondary)" }}>
                <h4 style={{ color: "var(--text-primary)", marginBottom: "12px" }}>Original JSON</h4>
                {renderJson(JSON.parse(old), diff, "left")}
              </div>
              <div style={{ flex: "1 1 300px", overflow: "auto", maxHeight: "500px", padding: "20px", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", color: "var(--text-secondary)" }}>
                <h4 style={{ color: "var(--text-primary)", marginBottom: "12px" }}>Modified JSON</h4>
                {renderJson(JSON.parse(newJson), diff, "right")}
              </div>
            </div>
          </div>
        )}

        {compared && diff && diff.length === 0 && (
          <p style={{ color: "var(--text-secondary)", marginTop: "16px" }}>Both JSON objects are identical.</p>
        )}
      </div>
    </section>
  );
};

export default JsonDiff;
