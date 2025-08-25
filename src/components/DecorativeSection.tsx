import decorativeImage from 'figma:asset/a4e5a942a31637d724581bdacba8ac71c7002287.png';

export function DecorativeSection() {
  return (
    <section className="w-full bg-white relative overflow-hidden">
      <div className="w-full relative mt-[-2px] mr-[0px] mb-[-20px] ml-[0px] p-[0px]">
        <img 
          src={decorativeImage} 
          alt="Decorative grass silhouette border"
          className="w-full h-auto object-fill block min-w-full"
          style={{ 
            display: 'block',
            width: '100vw',
            objectFit: 'fill',
            marginTop: '-2px'
          }}
        />
      </div>
    </section>
  )
}