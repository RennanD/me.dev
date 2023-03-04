export default function HelloPage() {
  return (
    <div className="mt-24 px-[27px] max-w-[1802px]">
      <div className="relative flex flex-col">
        <p className="font-light text-gray-100 leading-[22px]">
          Hi everyone. I am
        </p>

        <p className="mt-[10px] text-gray-100 text-[62px] max-w-[291px] leading-[62px]">
          Rennan Oliveira
        </p>

        <p className="mt-[10px] text-cyan-500 font-light leading-[25px] max-w-[273px] text-[20px]">
          {` `}
          {`>`} Front-end mobile/web developer
        </p>

        <div className="absolute w-[255.56px] h-[277.05px] left-1 top-[91px] bg-purple-500 opacity-40 blur-[87px]"></div>
        <div className="absolute w-[255.56px] h-[277.05px] left-[175.24px] top-[179.8px] bg-cyan-500 opacity-10 blur-[87px]"></div>
      </div>

      <div className="mt-[185px]">
        <p className="text-sm leading-5 text-omni-comment">
          {` `}
          {`//`} Find my profile on Github
        </p>

        <p className="text-sm leading-5 text-pink-500 font-medium max-w-[273px] mt-4">
          const <span className="text-white"> githubLink</span> ={` `}
          <a className="text-yellow-500" href="https://github.com/rennanD">
            {` `}
            {`"https://github.com/rennanD"`}
          </a>
        </p>
      </div>
    </div>
  );
}
