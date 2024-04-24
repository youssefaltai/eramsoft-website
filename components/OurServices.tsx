import Branches from "./Branches";
import ServiceCard from "./ServiceCard";
import TechCard from "./TechCard";

function OurServices() {
  return <div className="flex flex-col gap-16">
    <div className="flex flex-col gap-16">
      <h3 id="solutions">How Can We Help You?</h3>
      <div className="flex gap-32">
        <div className="flex flex-col justify-between py-16">
          <h4 className="font-bold text-2xl">
            Web Development
          </h4>
          <h4 className="font-bold text-2xl">
            Mobile Development
          </h4>
        </div>
        <div className="flex flex-col justify-between h-96">
          <div className="flex gap-8">
            <TechCard title="Django" image="/django.svg" width={60} height={75} />
            <TechCard title="Laravel" image="/laravel.svg" width={80} height={80} />
            <TechCard title="Next.js" image="/next.svg" width={80} height={80} />
            <TechCard title="React" image="/react.svg" width={80} height={75} />
          </div>
          <div className="flex gap-8">
            <TechCard title="Android (Kotlin)" image="/android.svg" width={90} height={40} />
            <TechCard title="Flutter" image="/flutter.svg" width={55} height={65} />
            <TechCard title="React Native" image="/react.svg" width={80} height={80} />
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <h4 className="font-bold text-2xl">
        And more and more...
      </h4>
      <div className="flex items-center">
        <Branches />
        <div className="flex flex-col gap-14">
          <ServiceCard title="Custom Software Solutions" />
          <ServiceCard title="UI/UX Design" />
          <ServiceCard title="Quality Assurance & Testing" />
          <ServiceCard title="Consultancy & Strategy" />
        </div>
      </div>
    </div>
  </div>
}

export default OurServices;
