# css

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { theme } = useData()
const count = ref(0)
console.log(theme)
const side = theme.value.sidebar

function add() {
   count.value++
}
</script>

<div @click="add">
   <span>{{ count }}</span>
</div>

{{ $frontmatter }}

{{ theme }}