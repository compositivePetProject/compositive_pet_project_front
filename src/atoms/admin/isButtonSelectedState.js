import { atom } from "recoil";

export const communityActiveState = atom({
    key: 'communityActiveState',
    default: false,
});

export const adoptCommunityActiveState = atom({
    key: 'adoptCommunityActiveState',
    default: false,
});

export const shopActiveState = atom({
    key: 'shopActiveState',
    default: false,
});

export const mapActiveState = atom({
    key: 'mapActiveState',
    default: false,
});