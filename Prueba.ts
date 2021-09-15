console.log("Simon");
console.log("asies");
console.log("como vez");
console.log("Esta vez");

class A {
    private x= 10;

    public ImprimirX(Otra: A){
        console.log(Otra.x);
    }
}

const b = new A();

b.ImprimirX(new A());