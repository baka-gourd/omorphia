### Simple example

```svelte example raised
<script lang="ts">
    import { Chips } from "omorphia";
</script>

<Chips options={[
    {
        label: 'One',
        value: 'one'
    },
    {
        label: 'Two',
        value: 'two'
    }]}
/>
```

### Force an option to be selected with `neverEmpty`

```svelte example raised
<script lang="ts">
    import { Chips } from "omorphia";

    let foo = 'modpack'
</script>

<Chips neverEmpty bind:value={foo} options={[
    {
        label: 'Mod',
        value: 'mod'
    },
    {
        label: 'Modpack',
        value: 'modpack'
    },
    {
        label: 'World',
        value: 'world'
    }]}
/>
```
