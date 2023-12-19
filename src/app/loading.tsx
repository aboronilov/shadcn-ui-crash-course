import SkeletonCard from '@/components/custom/SkeletonCard'
import React from 'react'

type Props = {}

const loading = (props: Props) => {
    return (
        <main>
            <div className='grid grid-cols-3 gap-8'>
                {"abcdefgeh".split('').map((item) => (
                    <SkeletonCard key={item} />
                ))}
            </div>
        </main>
    )
}

export default loading