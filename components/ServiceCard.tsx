type ServiceCardProps = {
  title: string;
}

function ServiceCard({ title }: ServiceCardProps) {
  return <div className="flex flex-col justify-center items-center bg-[--primary-color] rounded-lg border-2 border-[--secondary-color] p-4 w-min">
    <h6 className="font-semibold text-2xl text-center text-nowrap">
      {title}
    </h6>
  </div>
}


export default ServiceCard;
