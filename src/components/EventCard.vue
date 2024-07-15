<template>
    <Card>
        <template #title>
            <h3>{{ event.name }}</h3>
        </template>
        <template #subtitle>
            <p>{{ event.dateTime }}</p>
        </template>
        <template #content>
            <p>{{ event.description }}</p>
        </template>
    </Card>
</template>
<script>
export default {

    props: ['event'],

};
</script>
