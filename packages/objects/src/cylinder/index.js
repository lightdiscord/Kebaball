import { BackSide,LatheGeometry, MeshBasicMaterial, FaceColors, Mesh, Vector2 } from "three";
import { map, forEach, range } from "@kebaball-packages/utils";

export const createCylinder = (targets = []) => {
    const segments = 8;

    const points = [
        new Vector2(1, 1),
        new Vector2(2, 1),
        new Vector2(2, 0),
        new Vector2(1, 0),
        new Vector2(1, 1),
    ];

    const geometry = new LatheGeometry(points, segments);

    geometry.faces.forEach(face => face.color.set(0xcccccc))


    targets
        .map(target => range(target * segments, (target + 1) * segments))
        .map(map(idx => geometry.faces[idx]))
        .forEach(forEach(face => face.color.set(0x333333)));

    const material = new MeshBasicMaterial({ vertexColors: FaceColors, side: BackSide });

    return new Mesh(geometry, material);
}
