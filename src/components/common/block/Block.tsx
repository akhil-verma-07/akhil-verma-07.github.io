
const Block = ({title,children}:any) => {
  return (
    <section className="py-16 px-32">
        <p className='fs-32 fw-5 head'>{title}</p>
        {children}
    </section>
  )
}

export default Block