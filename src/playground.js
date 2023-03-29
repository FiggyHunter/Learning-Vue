import { ref, computed, reactive, toRefs } from 'vue';

const broj = ref(2);
console.log(broj.value);

const broj_computed = computed(()=> broj.value + 5);
console.log(broj_computed.value);

broj.value = 8;
console.log(broj_computed.value);

const person = reactive({
  name: 'Boris',
});

const { name } = toRefs(person); // name nije PLAIN VALUE nego je reactive object, trebas mu name.value

const title = computed(() => name.value + ' the Great ');
console.log(title.value);

const titleLength = computed(() => {
  return title.value.length;
});
console.log(titleLength.value);

person.name = 'Leonardo';
console.log(title.value);
console.log(titleLength.value);
