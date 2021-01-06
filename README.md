# Filter Combo

Componente responsável pela configuração de Filtros em Combobox.

## Forma de Utilização

```html
<aui:select id="comboFilter">
  <aui:option label="comboFilterDefaultValue" value="" />
</aui:select>
```

```js
AUI().use('ent-portlet', 'ent-filter-combo', function (A) {
  var portlet = new A.Portlet('.my-portlet-wrapper-class')

  var options = {
      selector: portlet.getFieldId('comboFilter')
  }

  new A.FilterCombo(options)
})
```
### Opções suportadas pelo componente

O componente é configurado através de um objeto passado em seu construtor.
O permite as seguintes configurações:

#### `selector` [obrigatório]

Propriedade responsável pela identificação do seletor da Combobox que irá se comportar como Filter Combo.

## Outras opções:
https://select2.org