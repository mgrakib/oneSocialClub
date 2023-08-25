import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';

const layout = ({children}) => {
    return (
		<div>
			<div className='flex items-center justify-between'>
				<p className='text-2xl text-[#1B2445] font-semibold'>Message</p>

				<div>
					<button className='bg-[#0A208B] text-white hover:bg-[#3F1566] py-2 px-6 rounded-md duration-700 flex items-center gap-2'>
						<BsPlus /> New Chat
					</button>
				</div>
			</div>

			<div className='flex bg-white'>
				<div className='w-[30%] h-full overflow-y-auto'>
					<div className='flex p-5 border-t border-b items-center justify-between  '>
						<div className='flex items-center gap-3'>
							<button className='py-2 px-5 text-blue-600 rounded bg-gray-200'>
								Inbox
							</button>
							<button className='py-2 px-5 rounded '>
								Groups
							</button>
						</div>
						<div>
							<BiSearchAlt />
						</div>
					</div>

					<div className='flex items-center justify-between py-2 px-5'>
						<p className='text-[13px]'>New</p>
						<p className='text-[14px] text-blue-600'>
							Mark all as read
						</p>
					</div>

					<div className='flex flex-col gap-1  h-[70%] overflow-y-auto'>
						<div className='py-2 px-5 bg-[#F2F4F9] flex items-center justify-between'>
							<div className='w-[40px] h-[40px] rounded relative'>
								<img
									src='https://i.ibb.co/mRkND5B/Md-Golam-Rakib.jpg'
									alt=''
								/>
								<div className='w-[10px] h-[10px] bg-lime-500 rounded-full absolute -right-[2px] -bottom-[2px]'></div>
							</div>

							<div className='text-[13px] flex-1  pl-2 flex flex-col '>
								<p className='text-[#1B2445] font-bold'>
									Richard Nelson
								</p>
								<p className='text-[11px] text-gray-500'>
									Hello, how are you my firend, how ar..
								</p>
							</div>
						</div>

						<div className='py-2 px-5  flex items-center justify-between'>
							<div className='w-[40px] h-[40px] rounded relative object-cover'>
								<img
									src='https://i.ibb.co/ZK7kZFQ/361410179-245985238199363-6106337204037073842-n.jpg'
									alt=''
									className='w-[40px] h-[40px] '
								/>
								<div className='w-[10px] h-[10px] bg-lime-500 rounded-full absolute -right-[2px] -bottom-[2px]'></div>
							</div>

							<div className='text-[13px] flex-1  pl-2 flex flex-col '>
								<p className='text-[#1B2445] font-bold'>
									Richard Nelson
								</p>
								<p className='text-[11px] text-gray-500'>
									Hello, how are you my firend, how ar..
								</p>
							</div>
						</div>

						<div className='py-2 px-5 bg-[#F2F4F9] flex items-center justify-between'>
							<div className='w-[40px] h-[40px] rounded relative'>
								<img
									src='https://i.ibb.co/mRkND5B/Md-Golam-Rakib.jpg'
									alt=''
								/>
								<div className='w-[10px] h-[10px] bg-lime-500 rounded-full absolute -right-[2px] -bottom-[2px]'></div>
							</div>

							<div className='text-[13px] flex-1  pl-2 flex flex-col '>
								<p className='text-[#1B2445] font-bold'>
									Richard Nelson
								</p>
								<p className='text-[11px] text-gray-500'>
									Hello, how are you my firend, how ar..
								</p>
							</div>
						</div>

						<div className='py-2 px-5  flex items-center justify-between'>
							<div className='w-[40px] h-[40px] rounded relative object-cover'>
								<img
									src='https://i.ibb.co/ZK7kZFQ/361410179-245985238199363-6106337204037073842-n.jpg'
									alt=''
									className='w-[40px] h-[40px] '
								/>
								<div className='w-[10px] h-[10px] bg-lime-500 rounded-full absolute -right-[2px] -bottom-[2px]'></div>
							</div>

							<div className='text-[13px] flex-1  pl-2 flex flex-col '>
								<p className='text-[#1B2445] font-bold'>
									Richard Nelson
								</p>
								<p className='text-[11px] text-gray-500'>
									Hello, how are you my firend, how ar..
								</p>
							</div>
						</div>

						<div className='py-2 px-5 bg-[#F2F4F9] flex items-center justify-between'>
							<div className='w-[40px] h-[40px] rounded relative'>
								<img
									src='https://i.ibb.co/mRkND5B/Md-Golam-Rakib.jpg'
									alt=''
								/>
								<div className='w-[10px] h-[10px] bg-lime-500 rounded-full absolute -right-[2px] -bottom-[2px]'></div>
							</div>

							<div className='text-[13px] flex-1  pl-2 flex flex-col '>
								<p className='text-[#1B2445] font-bold'>
									Richard Nelson
								</p>
								<p className='text-[11px] text-gray-500'>
									Hello, how are you my firend, how ar..
								</p>
							</div>
						</div>

						<div className='py-2 px-5  flex items-center justify-between'>
							<div className='w-[40px] h-[40px] rounded relative object-cover'>
								<img
									src='https://i.ibb.co/ZK7kZFQ/361410179-245985238199363-6106337204037073842-n.jpg'
									alt=''
									className='w-[40px] h-[40px] '
								/>
								<div className='w-[10px] h-[10px] bg-lime-500 rounded-full absolute -right-[2px] -bottom-[2px]'></div>
							</div>

							<div className='text-[13px] flex-1  pl-2 flex flex-col '>
								<p className='text-[#1B2445] font-bold'>
									Richard Nelson
								</p>
								<p className='text-[11px] text-gray-500'>
									Hello, how are you my firend, how ar..
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='w-[70%] h-full'>{children}</div>
			</div>
		</div>
	);
};

export default layout;