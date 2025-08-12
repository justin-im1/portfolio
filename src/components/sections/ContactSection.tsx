import LinkedinSocialIcon from '../icons/LinkedinSocialIcon';
import GithubSocialIcon from '../icons/GithubSocialIcon';

export default function ContactSection() {
  return (
    <div className="space-y-4">
      <a href="mailto:justin.im@uwaterloo.ca" className="block text-sm md:text-base">
        justin.im@uwaterloo.ca
      </a>
      <div className="flex justify-center space-x-6 mt-8">
        <a href="https://linkedin.com/in/justin-im1" target="_blank" rel="noopener noreferrer" 
           className="text-white hover:scale-110 transition-transform">
          <LinkedinSocialIcon className="w-7 h-7 md:w-8 md:h-8"/>
        </a>
        <a href="https://github.com/justin-im1" target="_blank" rel="noopener noreferrer" 
           className="text-white hover:scale-110 transition-transform">
          <GithubSocialIcon className="w-7 h-7 md:w-8 md:h-8"/>
        </a>
      </div>
    </div>
  );
} 