'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import NavBar from '../components/navbar';

export default function Interests() {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const spotlight = document.querySelector('.spotlight-overlay') as HTMLElement;
            if (spotlight) {
                spotlight.style.setProperty('--x', `${e.clientX}px`);
                spotlight.style.setProperty('--y', `${e.clientY}px`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <NavBar/>
            <div className="spotlight-overlay"/>
            <div className="spacer"/>
            <div className="spacer"/>
            <div className="body-gallery">
                <div className="particles"/>
                <div className="background-beam"/>
                <div className="background-beam-2"/>
                <div className="body-column">
                    <h1 className="center">Artwork</h1>
                    <div className="spacer"/>
                    <div className="gallery-grid">
                        <div className="card gallery">
                            <img src="/images/gallery/kelp.png" className="gallery-image" alt="Kelp"/>
                            <div className="card-header">Kelp Forest<span className="card-date">SEP 2022</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/shallows.png" className="gallery-image" alt="Shallows"/>
                            <div className="card-header">Safe Shallows<span className="card-date">OCT 2022</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/reaper.png" className="gallery-image" alt="Reaper"/>
                            <div className="card-header">Reaper Leviathan<span className="card-date">FEB 2024</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/berserker.png" className="gallery-image" alt="Berserker"/>
                            <div className="card-header">Piglin Brute<span className="card-date">FEB 2024</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/train.png" className="gallery-image" alt="Train"/>
                            <div className="card-header">Train<span className="card-date">FEB 2024</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/five.png" className="gallery-image" alt="five"/>
                            <div className="card-header">Five Nights at Freddy's<span className="card-date">OCT 2023</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/pillager.png" className="gallery-image" alt="Pillager"/>
                            <div className="card-header">Pillager<span className="card-date">DEC 2024</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/background.gif" className="gallery-image" alt="five"/>
                            <div className="card-header">Plains<span className="card-date">JAN 2025</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/island.gif" className="gallery-image" alt="island"/>
                            <div className="card-header">Island<span className="card-date">NOV 2022</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/nightmares.png" className="gallery-image" alt="Nightmares"/>
                            <div className="card-header">Little Nightmares<span className="card-date">FEB 2024</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/golem.png" className="gallery-image" alt="Golem"/>
                            <div className="card-header">Golem<span className="card-date">FEB 2024</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/thunder.png" className="gallery-image" alt="Thunder"/>
                            <div className="card-header">Wizard<span className="card-date">FEB 2024</span></div>
                        </div>
                    </div>
                    <div className="spacer" id="cuboids"/>
                    <h1 className="center">Cuboids</h1>
                    <div className="spacer"/>
                    <div className="gallery-grid">
                        <div className="card gallery">
                            <img src="/images/gallery/cuboids/farm.png" className="gallery-image" alt="Farm"/>
                            <div className="card-header">Farm<span className="card-date">IN-GAME SCREENSHOT</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/cuboids/village.png" className="gallery-image" alt="Village"/>
                            <div className="card-header">Plains Village<span className="card-date">IN-GAME SCREENSHOT</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/cuboids/snow.png" className="gallery-image" alt="Snow"/>
                            <div className="card-header">Snowy Village<span className="card-date">IN-GAME SCREENSHOT</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/cuboids/ocean.gif" className="gallery-image" alt="Ocean"/>
                            <div className="card-header">Ocean Reef<span className="card-date">IN-GAME SCREENSHOT</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/cuboids/armor.png" className="gallery-image" alt="Armor"/>
                            <div className="card-header">Armor<span className="card-date">ITEM SPRITES</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/cuboids/ores.png" className="gallery-image" alt="Ores"/>
                            <div className="card-header">Ores<span className="card-date">ITEM SPRITES</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/cuboids/tools.png" className="gallery-image" alt="Tools"/>
                            <div className="card-header">Tools<span className="card-date">ITEM SPRITES</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/cuboids/status.png" className="gallery-image" alt="Status"/>
                            <div className="card-header">Status Effect<span className="card-date">UI TEXTURES</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/cuboids/skins.gif" className="gallery-image" alt="Skins"/>
                            <div className="card-header">Skins<span className="card-date">ENTITIES</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/cuboids/blocks.png" className="gallery-image" alt="Blocks"/>
                            <div className="card-header">Blocks<span className="card-date">BLOCK TEXTURES</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/cuboids/crafting.png" className="gallery-image" alt="Crafting"/>
                            <div className="card-header">Crafting Table<span className="card-date">UI TEXTURES</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/cuboids/furnace.png" className="gallery-image" alt="Furnace"/>
                            <div className="card-header">Furnace<span className="card-date">UI TEXTURES</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/cuboids/blast.png" className="gallery-image" alt="Blast"/>
                            <div className="card-header">Blast Furnace<span className="card-date">UI TEXTURES</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/cuboids/smoker.png" className="gallery-image" alt="Smoker"/>
                            <div className="card-header">Smoker<span className="card-date">UI TEXTURES</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/cuboids/anvil.png" className="gallery-image" alt="Anvil"/>
                            <div className="card-header">Anvil<span className="card-date">UI TEXTURES</span></div>
                        </div>
                        <div className="card gallery">
                            <img src="/images/gallery/cuboids/beacon.png" className="gallery-image" alt="Beacon"/>
                            <div className="card-header">Beacon<span className="card-date">UI TEXTURES</span></div>
                        </div>
                    </div>
                    <div className="spacer"/>
                    <p className="center">Download from the links below!</p>
                    <div className="spacer"/>
                    <div className="gallery-grid">
                        <a href="https://www.curseforge.com/minecraft/texture-packs/cuboids-resource-pack" target="_blank" className="card gallery">
                            <img src="/images/gallery/cuboids/pack.png" className="gallery-image" alt="Farm"/>
                            <div className="card-header">Cuboids (CurseForge)<span className="card-date">JAN 24, 2024</span></div>
                            <div className="card-row">
                                <div className="card-tech">41.6k&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="card-icon" aria-hidden="true"><path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"></path><path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path></svg></div>
                                <div className="card-tech">1.21.X</div>
                            </div>
                        </a>
                        <a href="https://www.planetminecraft.com/texture-pack/cuboids-resource-pack/" target="_blank" className="card gallery">
                            <img src="/images/gallery/cuboids/pack.png" className="gallery-image" alt="Farm"/>
                            <div className="card-header">Cuboids (Planet Minecraft)<span className="card-date">JAN 24, 2024</span></div>
                            <div className="card-row">
                                <div className="card-tech">12.2k&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="card-icon" aria-hidden="true"><path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"></path><path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path></svg></div>
                                <div className="card-tech">1.21.X</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}