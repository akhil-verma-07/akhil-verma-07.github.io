import { Button, Container, TextField } from "@mui/material"
import { useState } from "react";


function compareJson(obj1:any, obj2:any, path = "") {
  let diffs:any[] = [];
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

function getDiffType(diffs:any, key:string, side:any, parentPath = "") {
  // Compute the full path for this key in object
  const currentPath = parentPath ? `${parentPath}.${key}` : key;
  
  // Search for a diff item that matches this path
  const found = diffs.find((diff:any) => diff.path === currentPath);

  if (!found) {
    return 'normal'; // No difference for this key
  }
  // For 'added', highlight only on the right; for 'removed', highlight only on the left
  if (found.type === "added" && side === "right") return "added";
  if (found.type === "removed" && side === "left") return "removed";
  // For 'changed', highlight on both sides
  if (found.type === "changed") return "changed";

  // Otherwise, do not highlight on this side
  return "normal";
}
const highlightStyle = {
  changed: { background: 'orange', fontWeight: 'bold',marginLeft:"20px" },
  added: { background: 'lightgreen', fontWeight: 'bold' ,marginLeft:"20px"},
  removed: { background: 'salmon', fontWeight: 'bold' ,marginLeft:"20px"},
  normal: {marginLeft:"20px"}
};

function renderJson(obj:any, diffs:any, side:any,path:string="") {
  
  return (
    <ul style={{listStyle:"none"}}>
      {"{"}
      {Object.entries(obj).map(([key, value], i) => {
        let pa = path ? `${path}.${key}` : key
        const diffType = getDiffType(diffs, key, side,path); // 'added', 'removed', 'changed', or 'normal'
        return (
          <li key={i} style={highlightStyle[diffType]} >
            
            {key}: {typeof value === 'object' && value !== null
              ? renderJson(value, diffs, side,pa)
              : JSON.stringify(value)}
          </li>
        );
      })}
      {"}"}
    </ul>
  );
}

const JsonDiff = () => {
  const [old,setOld] = useState("");
  const [newJson,setNewJson] = useState("");
  const [diff,setDiff]= useState(null as any);

  const onChangeOld = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setOld(event.target.value);
    setDiff(null);
  }
  const onChangeNew = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setNewJson(event.target.value);
    setDiff(null);
  }
  const findDiff = ()=>{
    setDiff(compareJson(JSON.parse(old),JSON.parse(newJson)));
  }
  console.log(diff)
  return (
    <Container className="bg-primary">
        <h3>Json Diff Checker</h3>
        <p>It compares two json objects and show the difference between them</p>

        <div className="flex flex-row w-100 my-16 gap-3">
            <div className="w-50">
                <TextField name="oldJson" multiline rows={10} value={old} onChange={onChangeOld} fullWidth placeholder="Paste object"/>
            </div>
            <div className="w-50">
                <TextField name="newJson" multiline rows={10} value={newJson} onChange={onChangeNew} fullWidth  placeholder="Paste object"/>
            </div>
        </div>
        <Button variant="contained" onClick={findDiff}>Compare</Button>
        {diff && Object.keys(diff).length>0 && <div>
          <h4>Difference</h4>
          <div style={{ display: 'flex', gap: '32px' }}>
          <div>
            <h3>Original JSON</h3>
            {renderJson(JSON.parse(old), diff, 'left')}
          </div>
          <div>
            <h3>Modified JSON</h3>
            {renderJson(JSON.parse(newJson), diff, 'right')}
          </div>
        </div>
        </div>}
    </Container>
  )
}

export default JsonDiff