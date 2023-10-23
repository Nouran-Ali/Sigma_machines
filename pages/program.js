import React, { useEffect } from 'react'
import styles from "../styles/Resources.module.css";
import { useState } from 'react';
import { Radio, Space, Tabs } from 'antd';
import Laser_marking_resources from '@/comps/Laser_marking_resources';
import Cnc_resources from '@/comps/Cnc_resources';
import ArtCAM from '@/comps/ArtCAM';
import FastCam from '@/comps/FastCam';
import SheetCam from '@/comps/SheetCam';
import Corel from '@/comps/Corel';
import Rdworks from '@/comps/Rdworks';
import Laser_Cad from '@/comps/Laser_Cad';
import Nestudio from '@/comps/Nestudio';

const Program = () => {

    const items = [
        {
            key: '1',
            label: "ArtCAM Program",
            children: <ArtCAM />,
        },
        {
            key: '2',
            label: "FastCam Program",
            children: <FastCam />,
        },
        {
            key: '3',
            label: "SheetCam Program",
            children: <SheetCam />,
        },
        {
            key: '4',
            label: "Corel Program",
            children: <Corel />,
        },
        {
            key: '5',
            label: "Rdworks Program",
            children: <Rdworks />,
        },

        {
            key: '6',
            label: "Laser Cad Program",
            children: <Laser_Cad />,
        },
        {
            key: '7',
            label: "Nestudio Program",
            children: <Nestudio />,
        },

    ];

    const [tabPosition, setTabPosition] = useState('left');
    const [tabPositionAr, setTabPositionAr] = useState('right');
    const [tabPositionTop, setTabPositionTop] = useState('top');

    const changeTabPosition = (e) => {
        setTabPosition(e.target.value);
        setTabPositionTop(e.target.value);
        setTabPositionAr(e.target.value);
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1280px)');

        function handleMediaChange(event) {
            if (event.matches) {
                setTabPosition("top")
            } else {
                setTabPosition("left")
            }
        }

        mediaQuery.addListener(handleMediaChange);

        return () => {
            mediaQuery.removeListener(handleMediaChange);
        };
    }, []);


    return (
        <>
            <div className={`${styles.bg_resources} mobile_d_none`}>
                <h1 className='text-white text-5xl text-center pt-24'>Programs</h1>
                <h1 className='text-[#bfbfbf] text-2xl text-center pt-5'>Resources</h1>
            </div>

            <div className='px-24 max-xl:px-10 mt-12 mb-12'>
                <Tabs
                    tabPosition={tabPosition
                        // language == "ar" ?
                        //   mediaQuery.matches ? tabPositionTop : tabPositionAr
                        //   : 
                        // mediaQuery.matches ? tabPositionTop : tabPosition
                    }
                    items={items}
                    defaultActiveKey="1"
                    className="custom-tab-bar "
                />
            </div>
        </>
    )
}

export default Program
