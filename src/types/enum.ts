/* eslint-disable no-unused-vars */
export const EntityType = {
	PROJECT: "PROJECT",
} as const;

export type EntityType = typeof EntityType[keyof typeof EntityType];
