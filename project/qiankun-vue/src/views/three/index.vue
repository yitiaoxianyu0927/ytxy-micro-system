<template>
    <div class="box-100" ref="container">
  
    </div>
</template>


<script> 

    import * as Three from "three"

    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


    export default{

        data(){

            return {

                camera: null,
                scene: null,
                renderer: null,
                mesh: null

            }
        },
        methods:{
          
            init(){

                let container = this.$refs['container'];
 
                this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10);
                this.camera.position.z = 1;
        
                this.scene = new Three.Scene();
        
                let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
                let material = new Three.MeshNormalMaterial();
        
                this.mesh = new Three.Mesh(geometry, material);
                this.scene.add(this.mesh);

                
        
                this.renderer = new Three.WebGLRenderer({antialias: true});
                this.renderer.setSize(container.clientWidth, container.clientHeight);

                container.appendChild(this.renderer.domElement);

                let controls = new OrbitControls(this.camera,this.renderer.domElement);
                controls.target.set(0,-0.2,-0.2);
                controls.update();
                 
                this.loadModel(); 

            },
            loadModel(){

             
                var loader = new THREE.GLTFLoader().setPath("./the_drunk_troll_tavern/");
                //内部解码文件夹
                // THREE.DRACOLoader.setDecoderPath( '../../js/javascript/' );
                // loader.setDRACOLoader( new THREE.DRACOLoader() );

                loader.load("./the_drunk_troll_tavern/scene.gltf",(gltf)=>{
                    gltf.scene.scale.set(0.03,0.03,0.03);
                    gltf.scene.position.set(0,0,0);
                    this.scene.add(gltf.scene);
                });

                // loader.load('./the_drunk_troll_tavern/scene.gltf', (obj) => {

                //     console.log(obj)

                //     obj.scene.position.z = 0.1;
                //     this.scene.add(obj.scene);

                // })
            },
            animate(){

                requestAnimationFrame(this.animate);
                this.renderer.render(this.scene, this.camera)

            }


        },
        mounted(){

            this.init();

            this.animate();  
        } 



    }



</script>


<style lang="less" scoped>
    
    .box-100{

        width:100%;
        height:100%;

    }

</style>