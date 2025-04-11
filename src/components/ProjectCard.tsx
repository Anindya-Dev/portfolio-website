import projectImage from '../assets/6502244.jpg';

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard = ({ title, description }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <img 
        src={projectImage} 
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard; 