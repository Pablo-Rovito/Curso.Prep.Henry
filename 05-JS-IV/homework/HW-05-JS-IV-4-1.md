# Ejercicio 1, JavaScript 4

## Objetos

Es una entidad que parece un array pero, en vez de índices, tiene propiedades. Por ejemplo, un objeto "silla" puede tener propiedades "ancho", "alto", "respaldo", "nro de patas", etc. Así, un objeto de JS se parece a un objeto de la vida real. 

### Propiedades

En el código, son los índices con los que se accede a los datos almacenados en el objeto. Se las puede pensar como lo que distingue a un Objeto de otro objeto. Por ejemplo, se tienen dos objetos "Silla1" y "Silla2" que son iguales pero se distinguen por la `propiedad` "ancho", donde "Silla1.ancho=10" y "Silla2.ancho=12". Las dos son sillas, pero una es más ancha que otra.

### Métodos

Cuando el valor de una propiedad se determina con una función (que es definida _dentro_ de la propiedad), se la denomina método. Por ejemplo, si se tiene un objeto "Niño" con una propiedad "alto" que aumenta duplicando a la "edad", se podría escribir como "Niño.alto=2*edad" en vez de modificar la altura cada vez que el niño cumpla años.

### Bucles `for...in`

Es el equivalente al `for` de los `array`, pero como los objetos no tienen índices sino propiedades (o _keys_) no pueden recorrerse con un contador de enteros (i=1, 2,..., n). Para eso, está el `for...in` que funcionaría como "__por__ cada (_propiedad_) __en__ _objeto_ hacer {}". Así, recorre las propiedades del objeto. 

### Notación de puntos vs notación de corchetes

La notación de puntos se requiere para llamar métodos dentro de objetos (como si fuesen funciones o métodos asociados a un tipo de variable), mientras que la notación de corchetes se suele usar para llamar variables.  