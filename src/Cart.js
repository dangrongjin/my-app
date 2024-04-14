// Cart.js
import React, { useState } from 'react';
import ProductsList from './ProductsList';
import CartItems from './CartItem';  // 假设你已经有这个组件来展示购物车中的物品

function Cart() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { title: "三国", company: "公司A", category: "小说", code: "A001", price: 30.0, stock: 100 },
    { title: "红楼", company: "公司A", category: "小说", code: "A002", price: 20.0, stock: 200 },
    { title: "天文", company: "公司A", category: "科学", code: "A003", price: 35.0, stock: 50 },
    { title: "地理", company: "公司A", category: "科学", code: "A004", price: 40.0, stock: 60 },
    { title: "水浒", company: "公司B", category: "小说", code: "B001", price: 28.0, stock: 50 },
    { title: "西游", company: "公司B", category: "小说", code: "B002", price: 25.0, stock: 60 },
    { title: "生物", company: "公司B", category: "科学", code: "B003", price: 50.0, stock: 50 },
    { title: "化学", company: "公司B", category: "科学", code: "B004", price: 45.0, stock: 60 }
]);
const addToCart = (product) => {
    setCart([...cart, product]);
};


const handleSortByPrice = () => {
    const productsCopy = [...products];
    quickSort(productsCopy, 0, productsCopy.length - 1);
    setProducts(productsCopy);
};

const handleSortByNumber = () => {
    const productsCopy = [...products];
    insertSort(productsCopy);
    setProducts(productsCopy);
};

const handleSortByPriceDesc = () => {
    const productsCopy = [...products];
    bubbleSort(productsCopy);
    setProducts(productsCopy);
};

const handleSortByStockDesc = () => {
    const productsCopy = [...products];
    shellSort(productsCopy);
    setProducts(productsCopy);
};

function quickSort(arr, start, end) {
    if (start >= end) return;

    let left = start;
    let right = end;
    const pivotValue = arr[start].price;
    while (start < end) {
        while (arr[end].price >= pivotValue && start < end) {
            end--;
        }
        while (arr[start].price <= pivotValue && start < end) {
            start++;
        }
        if (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
        }
    }

    [arr[left], arr[end]] = [arr[end], arr[left]];
    quickSort(arr, left, end - 1);
    quickSort(arr, end + 1, right);
}

function bubbleSort(arr) {
    let end = arr.length;
    while (end > 0) {
      let flag = false;
      for (let i = 1; i < end; i++) {
        if (arr[i - 1].price < arr[i].price) {  // 修改比较条件为降序
          [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
          flag = true;
        }
      }
      if (!flag) break;
      end--;
    }
  }
  
  function shellSort(arr) {
    let n = arr.length;
    let gap = n;
    while (gap > 1) {
      gap = Math.floor(gap / 2);
      for (let i = 0; i < n - gap; i++) {
        let end = i;
        let temp = arr[end + gap];
        while (end >= 0 && arr[end].stock < temp.stock) {  // 修改比较条件为降序
          arr[end + gap] = arr[end];
          end -= gap;
        }
        arr[end + gap] = temp;
      }
    }
  }
  


function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j].stock > current.stock) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
}


return (
    <div>
        <h1>产品列表</h1>
        <button onClick={handleSortByPrice}>快速排序：将商品价格升序排列</button>
        <button onClick={handleSortByNumber}>插入排序:按商品数量升序排列</button>
        <button onClick={handleSortByPriceDesc}>冒泡排序：按商品价格降序排列</button>
        <button onClick={handleSortByStockDesc}>希尔排序：按商品数量降序排列</button>
        <ProductsList products={products} onAddToCart={addToCart} />
        <h1>购物车</h1>
        <CartItems items={cart} />
    </div>
);
}

export default Cart;
