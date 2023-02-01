\*логика API при загрузке страницы
если в параметрах урлы нет page / filter{
initial page = 1
filter = null
}else {
initial page = url.page
filter = url.filter
}

.then FETCH with set API = (`https://reqres.in/api/products?page=${page}&per_page=5${idFilter ?? `id=${idFilter}`}`)

\*логика API при смене значеня filter
onClickBTN{
-setFilter in store (filter.value)
-FETCH(API), через зависимотсь переменной в ЮЗ эффект?
}

\*логика API при смене значеня page
onClickBTN{
-setPage in store (page.value)
-FETCH(API)
}
