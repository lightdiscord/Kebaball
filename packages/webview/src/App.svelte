<script>
    import { onMount } from "svelte";
    import { Scene, PerspectiveCamera, FaceColors, WebGLRenderer, CylinderGeometry, MeshBasicMaterial, Mesh } from "three";
    import { createCylinder } from "@kebaball-packages/objects/src/cylinder";
    import { range } from "@kebaball-packages/utils";

    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const cylinders = [
        createCylinder(range(3, 4)),
        createCylinder(range(4, 5)),
        createCylinder(range(2, 5)),
    ];

    cylinders.forEach((cylinder, idx) => {
        cylinder.position.y = idx
        scene.add(cylinder);
    });

    camera.rotation.x -= 0.5;
    camera.position.y = cylinders.length + 5;
    camera.position.z = 5;
    window.camera = camera;

    let canvas;

    onMount(() => {
        const renderer = new WebGLRenderer({ canvas });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const animate = () => {
            requestAnimationFrame(animate);

            cylinders.forEach(cylinder => (cylinder.rotation.y += 0.02));

            renderer.render(scene, camera);
        }

        animate();

        return () => {};
    });
</script>

<canvas bind:this={canvas}></canvas>

<style>
    canvas {
        width: 100%;
        height: 100%;
    }
</style>
