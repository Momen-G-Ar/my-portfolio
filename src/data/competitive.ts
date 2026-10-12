import type { Activity, ContestResult } from '../types';

export const results: ContestResult[] = [
    { contest: 'IEEEXtreme 18.0', year: '2024', result: '11th of 140 in Palestine', detail: 'Team ElKhatayreh; 1st of 31 teams at PPU.' },
    { contest: 'PCPC', year: '2023', result: '10th of 70+ teams', detail: 'Team ThreeAngryMen.' },
    { contest: 'PPU Collegiate Programming Contest', year: '2023', result: '2nd place' },
    { contest: 'Hebron Code Jam', year: '2023', result: '8th of 46', detail: 'Team time-limit-not-needed.' },
    { contest: 'ACPC (Arab Collegiate Programming Contest)', year: '2022', result: 'Finalist', detail: 'Team CLA$H.' },
    { contest: 'PCPC', year: '2022', result: '7th in Palestine', detail: 'Team CLA$H; qualified for ACPC 2022.' },
];

export const setting: Activity[] = [
    { title: 'Coordinator & problem setter, PPU CPC 2026', date: 'Sep 2026', detail: "14 problems; PPU's qualifier for PCPC." },
    { title: 'Problem setter, PPU PCPC 2025 qualifier', date: 'Aug 2025' },
    { title: 'Problem setter, PPU teams contest', date: 'Jul 2025' },
    { title: 'Problem setter, Hebron Code Jam qualifiers (Code Academy)', date: '2025, 2026' },
    { title: 'Problem setter, "Code it Palestinian" (برمجها فلسطيني)', date: 'Dec 2024', detail: '90+ participants from PPU, BZU and PTUK.' },
    {
        title: 'Coach of PPU teams qualified for ACPC through PCPC',
        date: '2024 – 2025',
        detail: '2024: Game Over. 2025: Absolute Cinema and Math Math Easy Easy.',
    },
    { title: 'Coach of PPU teams, Hebron Code Jam', date: '2025, 2026' },
    { title: 'Proctor, IEEEXtreme 19.0', date: '2025' },
];
