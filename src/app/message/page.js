/** @format */

import { FiChevronDown } from "react-icons/fi";

import { LuUserPlus } from "react-icons/lu";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";

const page = () => {
	return (
		<div className='w-full h-full'>
			<div className='flex p-5 border-l border-t border-b items-center justify-between  w-full'>
				<div className='flex items-center gap-2'>
					<div className='w-[40px] h-[40px] rounded relative'>
						<img
							src='https://i.ibb.co/mRkND5B/Md-Golam-Rakib.jpg'
							alt=''
						/>
						<div className='w-[10px] h-[10px] bg-lime-500 rounded-full absolute -right-[2px] -bottom-[2px]'></div>
					</div>

					<div className='flex justify-center gap-2'>
						<p>Richard Nelson</p>
						<FiChevronDown />
					</div>
				</div>

				<div className='flex items-center gap-3'>
					<LuUserPlus className='cursor-pointer text-[20px]' />

					<AiOutlineVideoCameraAdd className='cursor-pointer text-[20px]' />
				</div>
			</div>

			<div className='flex flex-col gap-3 w-full h-[350px]  overflow-y-auto px-2 messageBox' >
				<div className='w-full  text-right'>
					<span className='text-[10px] text-gray-400'>01:01am</span>

					<div className='flex flex-col justify-start items-end ml-auto  gap-2 max-w-[60%] text-[14px] text-gray-500'>
						<p className='bg-[#F2F4F9] py-1 px-2 rounded'>
							Yes, try to find
						</p>
						<p className='bg-[#F2F4F9] py-1 px-2 rounded'>
							It is very Importent for our business Lorem ipsum
							dolor sit amet.Importent for our business Lorem
							ipsum dolor sit amet.
						</p>
					</div>
				</div>

				<div className='w-full '>
					<div className='flex gap-2 items-center'>
						<div className='w-[40px] h-[40px] rounded relative object-cover'>
							<img
								src='https://i.ibb.co/ZK7kZFQ/361410179-245985238199363-6106337204037073842-n.jpg'
								alt=''
								className='w-[40px] h-[40px] '
							/>
							<div className='w-[10px] h-[10px] bg-lime-500 rounded-full absolute -right-[2px] -bottom-[2px]'></div>
						</div>

						<p className='text-[12px] font-bold'>Richard</p>
						<span className='text-[10px] text-gray-400'>
							01:01am
						</span>
					</div>

					<div className='flex flex-col justify-start items-start  gap-2 max-w-[60%] text-[14px] mt-2 text-gray-500'>
						<p className='bg-[#F2F4F9] py-1 px-2 rounded'>
							Hello, how are you my friend
						</p>
						<p className='bg-[#F2F4F9] py-1 px-2 rounded'>
							I am fine btw
						</p>
						<p className='bg-[#F2F4F9] py-1 px-2 rounded'>
							Need to talk about something importent are you
							available right now?
						</p>
					</div>
				</div>

				<div className='w-full  text-right'>
					<span className='text-[10px] text-gray-400'>01:01am</span>

					<div className='flex flex-col justify-start items-end ml-auto  gap-2 max-w-[60%] text-[14px] text-gray-500'>
						<p className='bg-[#F2F4F9] py-1 px-2 rounded'>
							Yes, try to find
						</p>
						<p className='bg-[#F2F4F9] py-1 px-2 rounded'>
							It is very Importent for our business Lorem ipsum
							dolor sit amet.Importent for our business Lorem
							ipsum dolor sit amet.
						</p>
					</div>
				</div>

				<div className='w-full '>
					<div className='flex gap-2 items-center'>
						<div className='w-[40px] h-[40px] rounded relative object-cover'>
							<img
								src='https://i.ibb.co/ZK7kZFQ/361410179-245985238199363-6106337204037073842-n.jpg'
								alt=''
								className='w-[40px] h-[40px] '
							/>
							<div className='w-[10px] h-[10px] bg-lime-500 rounded-full absolute -right-[2px] -bottom-[2px]'></div>
						</div>

						<p className='text-[12px] font-bold'>Richard</p>
						<span className='text-[10px] text-gray-400'>
							01:01am
						</span>
					</div>

					<div className='flex flex-col justify-start items-start  gap-2 max-w-[60%] text-[14px] mt-2 text-gray-500'>
						<p className='bg-[#F2F4F9] py-1 px-2 rounded'>
							Hello, how are you my friend
						</p>
						<p className='bg-[#F2F4F9] py-1 px-2 rounded'>
							I am fine btw
						</p>
						<p className='bg-[#F2F4F9] py-1 px-2 rounded'>
							Need to talk about something importent are you
							available right now?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
