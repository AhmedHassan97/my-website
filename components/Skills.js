import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Competitive exchange rates",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    name: "No hidden fees",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
  {
    name: "Transfers are instant",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
  },
  {
    name: "Mobile notifications",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: AnnotationIcon,
  },
];
const SkillsComponent = () => {
  return (
    <div
      className="mx-auto pt-12"
      style={{ maxWidth: "1600px", minHeight: "100vh", maxHeight: "100vh" }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p
            className="text-primary-content mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-6xl"
            style={{ fontFamily: "Ubuntu Mono" }}
          >
            Abilities
          </p>
          <p className="text-base-content mt-4 max-w-2xl text-xl lg:mx-auto font-semibold">
            “Life without knowledge is death in disguise.”
          </p>
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto text-base-content font-semibold">
            - Talib Kweli
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base ">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
