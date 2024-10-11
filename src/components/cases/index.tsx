import Image from "next/image";
import Container from "@/components/base/container";
import SecontionTitle from "@/components/base/section-title";

const Cases = () => (
	<>
		<Container>
			<div className='relative col-start-2 col-span-6 overflow-hidden max-h-28'>
				<SecontionTitle label='Cases' />
			</div>
		</Container>
		<Container>
			<div className='shadow-[-5px_-26px_24px_-20px_rgba(0,_0,_0,_0.2)] col-span-5 col-start-2 h-[230px] rounded-lg row-start-1 z-20 flex items-end bg-primary-400 p-6 box-s'>
				<p className='text-white text-xl font-semibold font-grotesk'>
					Hoort jouw project hier ook bij? <br />
					Neem contact op
				</p>
			</div>
			<div className='col-span-6 row-start-2 flex bg-dark-300 rounded-lg overflow-hidden h-[230px]'>
				<div className='relative aspect-square h-full'>
					<Image fill src='https://via.placeholder.com/308x230' alt='' />
				</div>
				<div className='relative p-4 flex flex-col gap-2'>
					<h3 className='text-3xl font-grotesk font-bold'>
						Modern E-commerce Pos Integration
					</h3>
					<p className='pr-12 font-roboto font-base'>
						Elevator pitch Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Maecenas euismod vitae est sit
					</p>
					<a href='#' className='absolute bottom-2 right-4'>
						Read more
					</a>
				</div>
			</div>
			<div className='col-start-7 col-span-6 row-span-2 h-[480px] bg-black rounded-lg'></div>
		</Container>
	</>
);
export default Cases;
