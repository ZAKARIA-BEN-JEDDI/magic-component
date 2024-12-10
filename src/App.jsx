import './App.css';
import { DynamicIconCloud } from './DynamicIconCloud ';

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Skills
      </h1>
      <DynamicIconCloud iconSlugs={[
        "javascript",
        "react",
        "html5",
        "css3",
        "mysql",
        "laravel",
        "firebase",
        "sql",
        "vercel",
        "git",
        "jira",
        "github",
        "visualstudiocode",
        "pycharm",
        "phpstorm",
        "sonarqube",
        "figma",
        "hostinger",
        "wordpress",
        "mongodb",
        "python",
        ]} />
    </>
  );
}
