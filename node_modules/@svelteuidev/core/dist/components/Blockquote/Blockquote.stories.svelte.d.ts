import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BlockquoteProps = typeof __propDef.props;
export type BlockquoteEvents = typeof __propDef.events;
export type BlockquoteSlots = typeof __propDef.slots;
export default class Blockquote extends SvelteComponentTyped<BlockquoteProps, BlockquoteEvents, BlockquoteSlots> {
}
export {};
