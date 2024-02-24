import React from 'react'
import SocialArtical from '../socialArtical'
import styles from '../../styles/homepage.module.css'
import { useRouter } from 'next/router';

interface KnowMoreProps {
    heading: string;
    articleData?: any;
    viewMore?: string;
    route: string;
}

const KnowMoreComp = ({ heading, articleData, viewMore, route }: KnowMoreProps) => {
    const router = useRouter()
    return (
        <div className={styles.kumCard}>
            <p className={styles.kumCardTitle}>{heading}</p>
            <div className='md:h-[465px] md:w-[800px] m-auto scrollable-content'>
            { 
                articleData && articleData?.payload?.sort((a:any, b:any) => {
                    let c: any = new Date(a.date);
                    let d: any = new Date(b.date);
                    return d - c
                }).slice(0, 4).map((data: any, index: number) => {
                    return <>
                        <SocialArtical
                            key={index+1}
                            headline={data.heading}
                            description={data.content}
                            date={new Date(data.date).toDateString().slice(4)}
                            fileLink={`${route}/${data.id}`}
                        />
                    </>

                })
            }
            </div>
            <div className={styles.kmuButton}>
                <button onClick={()=>router.push(viewMore || "")} className={styles.kmuBtn}>View More</button>
            </div>
        </div>
    )
}

export default KnowMoreComp