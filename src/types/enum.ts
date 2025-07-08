/* eslint-disable no-unused-vars */
export const EntityType = {
	PROJECT: "PROJECT",
} as const;

export type EntityType = typeof EntityType[keyof typeof EntityType];

export const StatusColor = {
	completed: 'bg-green-100 text-green-800 text-xs',
	in_progress: 'bg-blue-100 text-blue-600 text-xs',
	pending: 'bg-yellow-100 text-yellow-600 text-xs',
	cancelled: 'bg-red-100 text-red-600 text-xs',
	on_hold: 'bg-purple-100 text-purple-600 text-xs',
};
