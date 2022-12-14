import { FC } from "react";
import { productTypes } from "./Products";
import Router from "next/router";
import dynamic from "next/dynamic";
const Image = dynamic(() => import("next/image"));

const Product: FC<productTypes | any> = (props: { p: productTypes }) => {
	return (
		<div
			onClick={() => Router.push(`/${props.p.id}`)}
			className="bg-transparent group cursor-pointer col-span-1"
		>
			<div className="relative h-96 w-ful">
				<Image
					src={props.p.image}
					className="group-hover:opacity-70 duration-300 rounded"
					layout="fill"
					objectFit="cover"
					quality={50}
					alt="Product images"
					blurDataURL={props.p.image}
					placeholder="blur"
				/>
			</div>
			<div className="flex items-centers justify-between mt-4">
				<h1 className="font-semibold opacity-80">{props.p.title}</h1>
				<p className="font-semibold opacity-80">${props.p.price}</p>
			</div>
			<p className=" opacity-60">{props.p.color}</p>
		</div>
	);
};

export default Product;
