<template>
        <div 
            v-bind:class="{'check-filter': true, 'active': checked }" 
            v-on:click="checkFilter"
        >
            <span class="checkbox"></span>
            <span class="check-filter-title">{{title}}</span>
        </div>
</template>
<script>
            export default {
            props: ['title'],
            data() {
                return {
                    checked: false
                };
            },
            methods: {
                checkFilter: function() {
                    this.checked = !this.checked;
                    this.$emit('check-filter', 'genre', this.title, this.checked);
                }
            }
        }
</script>