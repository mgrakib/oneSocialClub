/** @format */

"use client";
import Image from "next/image";
import logo from "../../../public/logo.png";
import CommunitySettings from "../CommunitySettings/CommunitySettings";
import { RiMessage2Fill } from "react-icons/ri";
import { MdOutlineShoppingBag, MdSpaceDashboard } from "react-icons/md";
import { FiChevronRight, FiUsers } from "react-icons/fi";
import { BiPlus } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";

const SidNavBar = () => {
	const [activeRoute, setActiveRoute] = useState("Feed");
	return (
		<div>
			{/* logo and name  */}
			<div className='flex items-center gap-[6px] w-full relative'>
				<div>
					<Image
						src={logo}
						alt='Picture of the author'
						width={35}
						height={35}
						quality={100}
					/>
				</div>
				<p className='font-semibold'>1 Social Club</p>

				<div className='absolute top-1/2 -translate-y-1/2 right-1'>
					<CommunitySettings />
				</div>
			</div>

			{/* top router  */}
			<div className=' my-6 text-[14px]'>
				<ul>
					<Link href={"/feed"}>
						<li
							onClick={() => setActiveRoute("Feed")}
							className={`py-[10px] px-[14px] cursor-pointer duration-500  rounded-md flex items-center gap-3 ${
								activeRoute === "Feed"
									? "text-[#fff] bg-[#0A208B]"
									: "text-[#5F6165] hover:bg-[#F2F4F9]"
							} `}
						>
							<span>
								<MdSpaceDashboard className='text-xl' />
							</span>{" "}
							Feed
						</li>
					</Link>
					{/* messages  */}
					<Link href={"/message"}>
						<li
							onClick={() => setActiveRoute("Messages")}
							className={`py-[10px] px-[14px] cursor-pointer duration-500  rounded-md flex items-center gap-3 ${
								activeRoute === "Messages"
									? "text-[#fff] bg-[#0A208B]"
									: "text-[#5F6165] hover:bg-[#F2F4F9]"
							} `}
						>
							<span>
								<RiMessage2Fill className='text-xl' />{" "}
							</span>{" "}
							Messages
						</li>
					</Link>
					{/* members  */}
					<Link href={"/members"}>
						<li
							onClick={() => setActiveRoute("Members")}
							className={`py-[10px] px-[14px] cursor-pointer duration-500  rounded-md flex items-center gap-3 ${
								activeRoute === "Members"
									? "text-[#fff] bg-[#0A208B]"
									: "text-[#5F6165] hover:bg-[#F2F4F9]"
							} `}
						>
							<span>
								<FiUsers className='text-xl' />{" "}
							</span>{" "}
							Members
						</li>
					</Link>
					{/* Shop */}
					<Link href={"/shop"}>
						<li
							onClick={() => setActiveRoute("Shop")}
							className={`py-[10px] px-[14px] cursor-pointer duration-500  rounded-md flex items-center gap-3 ${
								activeRoute === "Shop"
									? "text-[#fff] bg-[#0A208B]"
									: "text-[#5F6165] hover:bg-[#F2F4F9]"
							} `}
						>
							<span>
								<MdOutlineShoppingBag className='text-xl' />{" "}
							</span>{" "}
							Shop
						</li>
					</Link>
				</ul>
			</div>

			<div>
				<div className='flex items-center justify-between py-[10px]  cursor-pointer px-1 duration-500 hover:bg-[#F2F4F9] rounded-md '>
					<h6 className='font-bold text-[#3E4868] text-[14px]'>
						Collections
					</h6>
					<div>
						<BiPlus />
					</div>
				</div>

				{/* collections name  */}
				<div className='flex flex-col gap-1 mt-2'>
					{/* collections name ome */}
					<div>
						<div className='flex items-center justify-between py-[10px]  cursor-pointer pl-2 duration-500 hover:bg-[#F2F4F9] rounded-md '>
							<h6 className='font-semibold text-[#6b7490] text-[12px]'>
								Collections name one
							</h6>
							<div>
								<FiChevronRight />
							</div>
						</div>

						{/* room  */}
						<div className='flex flex-col gap-1'>
							{/* room one  */}
							<div className=' py-[5px]  cursor-pointer pl-3 duration-500 hover:bg-[#F2F4F9] rounded-md '>
								<div className='pl-2 border-l-2 border-[#0A208B]  flex flex-col justify-between gap-1'>
									<h6 className='font-semibold text-[#6b7490] text-[12px] leading-[14px]'>
										Room name one
									</h6>
									<span className='text-[10px] leading-[12px]'>
										Public
									</span>
								</div>
							</div>
							{/* room second  */}
							<div className=' py-[5px]  cursor-pointer pl-3 duration-500 hover:bg-[#F2F4F9] rounded-md '>
								<div className='pl-2 border-l-2 border-[#0A208B]  flex flex-col justify-between gap-1'>
									<h6 className='font-semibold text-[#6b7490] text-[12px] leading-[14px]'>
										Room name one
									</h6>
									<span className='text-[10px] leading-[12px]'>
										Public
									</span>
								</div>
							</div>
							{/* room three  */}
							<div className=' py-[5px]  cursor-pointer pl-3 duration-500 hover:bg-[#F2F4F9] rounded-md '>
								<div className='pl-2 border-l-2 border-[#0A208B]  flex flex-col justify-between gap-1'>
									<h6 className='font-semibold text-[#6b7490] text-[12px] leading-[14px]'>
										Room name one
									</h6>
									<span className='text-[10px] leading-[12px]'>
										Public
									</span>
								</div>
							</div>
						</div>
					</div>
					{/* Collections name Two */}
					<div className='flex items-center justify-between py-[10px]  cursor-pointer pl-2 duration-500 hover:bg-[#F2F4F9] rounded-md '>
						<h6 className='font-semibold text-[#6b7490] text-[12px]'>
							Collections name Two
						</h6>
						<div>
							<FiChevronRight />
						</div>
					</div>
					{/* Collections name Three */}
					<div className='flex items-center justify-between py-[10px]  cursor-pointer pl-2 duration-500 hover:bg-[#F2F4F9] rounded-md '>
						<h6 className='font-semibold text-[#6b7490] text-[12px]'>
							Collections name Three
						</h6>
						<div>
							<FiChevronRight />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SidNavBar;
