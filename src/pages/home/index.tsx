import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
];

export default function Home() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <DotPattern
        x={1}
        y={1}
        width={30}
        height={30}
        className={cn(
          `[mask-image:radial-gradient(circle_at_center,white,transparent)]`
        )}
      />
      <div className=" max-w-3xl mx-auto my-12 p-6 ">
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Luís</h1>
        <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Frontend Developer.
        </h2>

        <div className="flex space-x-4 mb-6">
          <Button variant="outline" size="icon">
            <LinkedinIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <GithubIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <MailIcon className="h-4 w-4" />
          </Button>
        </div>

        <h3 className="mb-8 text-gray-400 text-xl font-semibold">
          As a passionate developer, I have gained valuable experience in
          implementing new features and maintaining code across various
          projects. I am dedicated to delivering high-quality, efficient solutions that
          contribute to project success, and I thrive in collaborative
          environments where I can help build exceptional products.
        </h3>

        <Separator className="my-12 h-[2px] bg-gray-500" />

        <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gray-200">
          <TimelineItem date="03-2024" isLeft={true} isLatest={true}>
            <p className="mt-1 text-gray-300">
              Started working as a Frontend Freelancer
            </p>
          </TimelineItem>
          <TimelineItem date="01-2023" isLeft={false}>
            <p className="mt-1 text-gray-300">
              Working as a Frontend Developer <b>@Farfetch</b>
            </p>
          </TimelineItem>
          <TimelineItem
            date="04-2022"
            event="Worked as a Frontend Developer"
            company="Devoteam"
            isLeft={true}
          >
            <p className="mt-1 text-gray-300">
              Joined <b>Devoteam</b> working as a Frontend Developer
            </p>
          </TimelineItem>
          <TimelineItem date="10-2021" isLeft={false}>
            <p className="mt-1 text-gray-300">
              Started a job <b>@OlympusDAO</b> as a Frontend Developer
            </p>
          </TimelineItem>
          <TimelineItem date="01-2020" isLeft={true}>
            <p className="mt-1 text-gray-300">
              First developer job as Junior Fullstack Developer <b>@iTech-on</b>
            </p>
          </TimelineItem>
        </div>

        {/*         <Separator className="my-12 h-[2px] bg-gray-500" />

        <Tech /> */}

        <Separator className="my-12 h-[2px] bg-gray-500" />

        <div className="px-10 pb-10 pt-4">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
}

function TimelineItem({
  date,
  children,
  isLatest = false,
  isLeft = false,
}: any) {
  return (
    <div className="relative flex items-center justify-between">
      {isLeft ? (
        <>
          <div className="w-1/2 pr-8 text-right">
            <span className="text-sm font-semibold text-gray-400">{date}</span>
            {children}
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-200 border-4 border-zinc-900 z-10">
            {isLatest && (
              <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping"></div>
            )}
          </div>
          <div className="w-1/2 pl-8"></div>
        </>
      ) : (
        <>
          <div className="w-1/2 pr-8"></div>
          <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-200 border-4 border-zinc-900 z-10">
            {isLatest && (
              <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping"></div>
            )}
          </div>
          <div className="w-1/2 pl-8 text-left">
            <span className="text-sm font-semibold text-gray-400">{date}</span>
            {children}
          </div>
        </>
      )}
    </div>
  );
}

/* function Tech() {
  const technologies = [
    { name: "Typescript", icon: <IconBrandTypescript size={54} /> },
    { name: "Javascript", icon: <IconBrandJavascript size={54} /> },
    { name: "React", icon: <IconBrandReact size={54} /> },
    { name: "HTML", icon: <IconBrandHtml5 size={54} /> },
    { name: "CSS", icon: <IconBrandCss3 size={54} /> },
    { name: "NextJS", icon: <IconBrandNextjs size={54} /> },
    { name: "NodeJS", icon: <IconBrandNodejs size={54} /> },
    { name: ".NET", icon: <IconBrandCSharp size={54} /> },
    { name: "AWS", icon: <IconBrandAws size={54} /> },
    { name: "Tailwind", icon: <IconBrandTailwind size={54} /> },
    { name: "GraphQL", icon: <IconBrandGraphql size={54} /> },
    { name: "Git", icon: <IconBrandGit size={54} /> },
  ];

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Tech</h3>
      <div className="grid grid-cols-3 gap-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-zinc-700 opacity-90 p-4 rounded-lg flex flex-col items-center justify-center hover:opacity-80"
          >
            <div className="text-3xl mb-2">{tech.icon}</div>
            <div className="text-sm">{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
} */

export function TechCloud() {
  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
  ];

  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
