//1
-- Adicione sua consulta SQL aqui
select * from (select pessoas.id, pessoas.nome, sum(pedidos.quantidade) as total_itens from pessoas inner join pedidos on pessoas.id = pedidos.pessoas_id group by pessoas.id) as ped_soma order by total_itens desc limit 10;

//2
-- Insira aqui a sua query
select * from (select customer.customer_id, customer.email, count(payment.payment_id) as payments_count, sum(cast(payment.amount as float)) as total_amount from customer inner join payment on customer.customer_id = payment.customer_id group by customer.customer_id) as somas_clientes order by total_amount desc limit 10;

//3
const withdraw = amount => { 

    let a = 0
    let b = 0
    let c = 0 
    
    
    if (amount > 100 && (amount % 100) == 50 || (amount % 100) == 40 || (amount % 100) == 20 || (amount % 100) == 60 || (amount % 100) == 80 || (amount % 100) == 70 || (amount % 100) == 90 || (amount % 100) == 0) {
        a = amount / 100
    } else if ( amount > 100 && (amount % 100) == 10 || (amount % 100) == 30) {
        a = (amount / 100) - 1
    } else if (amount < 100 ) {
        a = 0
    }
    
    
    if (amount > 100 && (amount % 100) == 50) {
        b = (amount % 100) / 50
    } else if(amount > 100 && (amount % 100) == 10 || (amount % 100) == 30 || (amount % 100) == 70 || (amount % 100) == 90){
        b = 1
    } else if ( amount > 100 && (amount % 100) == 60 || (amount % 100) == 80) {
        b = 0
    } else if (amount == 50 || amount == 70 || amount == 90 ) {
        b = amount / 50
    }
    
    if (amount > 100 && (amount % 100) == 60 || (amount % 100) == 80 || (amount % 100) == 20 || (amount % 100) == 40) {
        c = (amount % 100) / 20
    } else if (amount > 100 && ((amount % 100)%50) == 10 || ((amount % 100)%50) == 30 ){
        c = ((amount % 100) + 50) / 20 
    } else if (amount > 100 && (amount % 100) == 70 || (amount % 100) == 90) {
        c = ((amount % 100) - 50) / 20
    } else if (amount < 100 && amount == 20 || amount == 40 || amount == 60 || amount == 80) {
        c = amount / 20
    } else if (amount < 100 && amount == 70 || amount == 90) {
        c = (amount - 50) / 20
    }
    
    return [parseInt(a), parseInt(b), parseInt(c)]
    }