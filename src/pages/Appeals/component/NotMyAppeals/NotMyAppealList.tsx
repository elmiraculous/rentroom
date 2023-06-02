import React from "react"
import {NotMyAppealArray} from "./NotMyAppealArray"
import img from "../../../../images/avatar.svg"

const NotMyAppealType = [
	{
		img: img,
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "решен"
	},
	{
		img: img,
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "решен"
	},
	{
		img: img,
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "на рассмотрении"
	},
	{
		img: img,
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "на рассмотрении"
	},
	{
		img: img,
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "решен"
	},
	{
		img: img,
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "решен"
	},
	{
		img: img,
		name: "Объект #4",
		theme: "протекает ванна",
		message: "уже который месяц мы не можем принять ванну не устроив авыавылаывлаыл пен...",
		status: "на рассмотрении"
	}
]
export const NotMyAppealList = () => {
	return (
		<div>
			<NotMyAppealArray NotMyAppeal={NotMyAppealType}/>
		</div>
	)

}