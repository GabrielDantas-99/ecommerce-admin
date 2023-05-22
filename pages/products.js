import Layout from '@/components/Layout';
import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/api/products').then(response => {
            setProducts(response.data);
        })
    }, []);
    return (
        <Layout>
            <Link 
                className='bg-blue-900 text-white rounded-md py-1 px-2'
                href={'/products/new'}
            >
                Add new product
            </Link>
            <table className='basic'>
                <thead>
                    <tr>
                        <td>Product Name</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product}>
                            <td >{product.title}</td>
                            <td>
                                {/* 1:26:12 */}
                                <Link href={'/products'}></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}