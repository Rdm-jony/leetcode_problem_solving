{
    function hii(nums1:number[]):void {
        let j=0
        for (let i = 0; i < nums1.length; i++) {
            
            if(nums1[i]!=0){
                let temp=nums1[i]
                nums1[i]=nums1[j]
                nums1[j]=temp
                j++
            }
        }
        
    }
    console.log(hii([6,2,0,2,3]))
}