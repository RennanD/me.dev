/* eslint-disable @typescript-eslint/quotes */
import Image from 'next/image';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

function ImageComparsion() {
  return (
    <ReactCompareSlider
      className="z-50"
      handle={
        <div className="relative grid h-full place-content-center">
          <div className="absolute h-[444px] w-[1px] translate-x-[14px] bg-gray-700 md:translate-x-[24px]"></div>
          <Image
            src={'/compare-slider-handle.svg'}
            width={28}
            height={28}
            alt=""
            className="z-10 md:h-12 md:w-12"
          />
        </div>
      }
      itemOne={
        <ReactCompareSliderImage
          src="/app-preview-image.png"
          alt="Image one"
          style={{
            objectFit: 'cover',
            objectPosition: 'left',
            width: '100%',
            height: '100%',
          }}
          className="rounded-lg md:rounded-xl"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src="/app-preview-code.png"
          alt="Image one"
          style={{
            objectFit: 'cover',
            objectPosition: 'left',
            width: '100%',
            height: '100%',
          }}
          className="rounded-lg md:rounded-xl"
        />
      }
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
      }}
    />
  );
}

export default function HelloPage() {
  return (
    <div className="flex w-full flex-col mt-24 px-[27px] max-w-[1491px] lg:mx-auto lg:px-[120px] lg:flex-1 lg:justify-between lg:flex-row">
      <div className="relative flex flex-col lg:mt-[156px] md:items-center lg:items-start">
        <p className="font-light text-gray-100 leading-[22px] lg:text-lg">
          Hi everyone. I am
        </p>

        <p className="mt-[10px] text-gray-100 text-[62px] max-w-[291px] leading-[62px] lg:leading-[76px] lg:max-w-[621px] md:text-center lg:text-start">
          Rennan Oliveira
        </p>

        <p className="mt-[10px] text-cyan-500 font-light leading-[25px] max-w-[273px] text-[20px] lg:text-[32px] lg:leading-[39px] lg:max-w-[403px] md:text-center lg:text-start">
          {` `}
          {`>`} Front-end mobile/web developer
        </p>

        <div className="absolute w-[255.56px] h-[277.05px] left-1 top-[91px] bg-purple-500 opacity-40 blur-[87px] md:hidden"></div>
        <div className="absolute w-[255.56px] h-[277.05px] left-[175.24px] top-[179.8px] bg-cyan-500 opacity-10 blur-[87px] md:hidden"></div>

        <div className="mt-[185px] md:mt-[81px]">
          <p className="text-sm leading-5 text-omni-comment lg:text-base">
            {` `}
            {`//`} Find my profile on Github
          </p>

          <p className="text-sm leading-5 text-pink-500 font-medium max-w-[273px] mt-4 lg:text-base lg:max-w-[490px]">
            const <span className="text-white"> githubLink</span> ={` `}
            <a
              target="_blank"
              className="text-yellow-500 "
              href="https://github.com/rennanD"
            >
              {` `}
              {`"`}
              <span className="relative after:content-[''] after:left-0 after:bottom-0 after:absolute after:w-0 after:h-[1px] after:bg-yellow-500 hover:after:w-full hover:after:transition-width hover:after:duration-300">
                https://github.com/rennanD
              </span>
              {`"`}
            </a>
          </p>
        </div>
      </div>

      <div className="relative hidden max-w-[620px] md:block md:mt-20 ml-[59px]">
        <ImageComparsion />

        <div className="absolute w-[454px] h-[492px] left-1 top-[51px] bg-purple-500 opacity-40 blur-[87px]"></div>
        <div className="absolute w-[454px] h-[492px] left-[197.24px] top-[192.46px] bg-cyan-500 opacity-10 blur-[87px]"></div>
      </div>
    </div>
  );
}
