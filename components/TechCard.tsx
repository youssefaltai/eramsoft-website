import Image from "next/image";

type TechCardProps = {
  title: string;
  image: string;
  width: number;
  height: number;
}

function TechCard({ title, image, width, height }: TechCardProps) {
  return <div className="flex flex-col gap-4 justify-center items-center bg-[--primary-color] w-36 h-40 rounded-lg border-2 border-[--secondary-color] px-2">
    <Image src={`/eramsoft-website${image}`} alt={title} width={width} height={height} />
    <h6 className="font-medium text-base text-center">
      {title}
    </h6>
  </div>
}

export default TechCard;  
