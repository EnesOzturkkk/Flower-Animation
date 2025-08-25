document.addEventListener('DOMContentLoaded', () => {
    var leaves = document.querySelectorAll('#flowerLeaf .bottomLeftLeaf, #flowerLeaf .bottomRightLeaf');
    leaves.forEach(leaf => {
        const rotationAngle = Math.random() * 360;
        const scaleFactor = 1 + Math.random() * 0.5; 
        let existingTransform = leaf.style.transform;
        leaf.style.transform = `rotate(${rotationAngle}deg) scale(${scaleFactor})`;
    });
});