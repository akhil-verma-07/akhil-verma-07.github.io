// import TextAnimation from "../TextAnimation/TextAnimation"

const Block = ({title,children}:any) => {
  return (
    <section className="py-24">
      <div className="flex justify-center relative">
        <p className='fs-32 fw-5 head'>{title}</p>
        {/* <TextAnimation text={title} resetOnLeave={true}/> */}
      </div>
      <div className="py-16 flex flex-col">
      {children}
      </div>
       
        
    </section>
  )
}

export default Block