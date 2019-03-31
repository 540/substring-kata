### **Substring Kata, TCR style**

Implementar una función de la siguiente manera `substring(left, right, start, stop)`. La función debe devolver las cadenas concatenadas (left y right), desde el índice de inicio (start) hasta el índice de parada (stop). ~~(Es trampa concatenar y luego cortar).~~

    Input               |   Output
    "abc", "def", 0, 6      "abcdef"
    "abc", "def", 0, 1      "a"
    "abc", "def", 0, 3      "abc"
    "abc", "def", 2, 3      "c"
    "abc", "def", 2, 5      "cde"
