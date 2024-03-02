import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-500 p-4 text-center">
      <div className="flex justify-center gap-3">
        <div>
          <a href="https://www.linkedin.com/in/aliaksandr-kisel-039170174/" target="_blank">
            <FaLinkedin className='text-3xl text-red-500 hover:text-red-600'/>
          </a>
        </div>

        <div>
          <a href="https://github.com/Alex991995" target="_blank">
            <FaGithub className='text-3xl text-black hover:text-slate-800'/>
          </a>
        </div>

        <div>
          <a href="https://t.me/alex99kisel" target="_blank">
            <FaTelegram className='text-3xl  text-sky-400 hover:text-sky-500'/>
          </a>
        </div>
      </div>
    </footer>
  );
}

