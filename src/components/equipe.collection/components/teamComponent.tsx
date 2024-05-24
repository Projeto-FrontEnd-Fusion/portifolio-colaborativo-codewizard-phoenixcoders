import React, { ReactNode } from "react"
import { cn } from '../../../lib/utils'
type TeamGenericProps = {
    children?: ReactNode,
    className?: string
}


export const Team = ({ children, className }: TeamGenericProps) => {
    return (
        <div className={cn('flex flex-col', className)}>
            {children}
        </div>
    )
}
export const TeamName = ({ children, className }: TeamGenericProps) => {
    return (
        <div className={cn('', className)}>
            <span className="text-black dark:text-emerald-primary text-2xl tracking-widest font-bold ">
                {children}
            </span>
        </div>
    )
}
export const TeamSubtitle = ({ children, className }: TeamGenericProps) => {
    return (
        <div className={cn('', className)}>
            <span className="text-xl">
                {children}
            </span>
        </div>
    )
}

interface TeamPersonalArea extends TeamGenericProps {
    imagerUrl: string
}


export const TeamPersonalMain = ({ children, className, imagerUrl }: TeamPersonalArea) => {
    return (
        <div className={cn("flex flex-col gap-8 items-center font-custom-inconsolata md:flex-row md:items-start", className)}>
            <div className={cn('w-36 md:min-w-64', className)}  >
                <img
                    className="rounded-lg"
                    src={
                        imagerUrl ?
                            imagerUrl
                            :
                            "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
                    } alt=""
                    onError={(e)=>{
                        e.currentTarget.onerror=null
                        e.currentTarget.src='https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ='
                    }} />
            </div>
            <div className="w-full flex flex-col items-center md:items-start ">
                {children}
            </div>
        </div>
    )
}

export const TeamPersonalSocial = ({ children, className }: TeamGenericProps) => {
    return (
        <div className={cn("flex gap-8 p-4", className)}>
            {children}
        </div>
    )
}

interface TeamSocialIcon extends TeamGenericProps {
    href: string
}
export const TeamPersonalSocialIcon = ({ className, children, href }: TeamSocialIcon) => {
    return (

        <a className={cn('size-12 rounded-full bg-dark-color-secondary text-white dark:bg-lime-primary dark:text-black flex justify-center items-center hover:opacity-85 ', className)} href={href}>
            {children}
        </a>

    )
}
export const TeamPersonalAboutText = ({ children, className }: TeamGenericProps) => {
    return (
        <div className={cn("max-w-2xl", className)}>
            <p>{children}</p>
        </div>
    )
}
export const TeamProjectMain = ({ children, className }: TeamGenericProps) => {
    return (
        <div className={cn("", className)}>
            {children}
        </div>
    )
}
export const TeamProjectHeader = ({ children, className }: TeamGenericProps) => {
    return (
        <div className={cn("mt-12 flex justify-center md:justify-start  gap-8", className)}>
            {children}
        </div>
    )
}
export const TeamProjectContent = ({ children, className }: TeamGenericProps) => {
    return (
        <div className={cn("md:grid lg:grid-cols-3 grid-cols-2 mt-8 gap-4 hidden", className)}>
            {children}
        </div>
    )
}
interface TeamProjectContentItem {
    src: string,
    alt?: string
    className?: string
}
export const TeamProjectContentItem = ({ src, className, alt }: TeamProjectContentItem) => {
    return (
        <a href="" target="_blank" className="" >
            <img
                className={cn("rounded-md h-full hover:scale-105 shadow-dark-color-primary", className)}
                src={
                    src?
                        src
                        :
                        "https://t4.ftcdn.net/jpg/03/88/63/83/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg"
                }
                onError={(e)=>{
                    e.currentTarget.onerror=null
                    e.currentTarget.src='https://t4.ftcdn.net/jpg/03/88/63/83/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg'
                }}
                alt={alt}
            />
        </a>
    )
}