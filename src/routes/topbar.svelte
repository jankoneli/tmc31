<script>
    import Topbarbtn from "./topbarbtn.svelte";
    let title = "TMC.31";
    let props = $props();
    let lang = $state('en');
    let localization = {
        "en":{
            "contact":"Contact",
            "students":"Students",
            "resources":"Resources",
            "archives":"Public Archives"
        },
        "id":{
            "contact":"Kontak",
            "students":"Daftar Siswa",
            "resources":"Pustaka",
            "archives":"Arsip"
        }
    };
    function localize(name) {
        return localization[lang][name];
    }
    $effect(() => {
        const saved = localStorage.getItem("lang");
        if (saved) lang = saved;
    });
    $effect(() => {
        localStorage.setItem("lang", lang);
    });
    function toggle(){
        if(lang=="en"){lang="id"}else{lang="en"}; 
    }
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css");
    *{
        font-family: "Atkinson Hyperlegible", sans-serif;
    }
</style>
<header class="flex fixed px-12 py-6 bg-zinc-900 w-full border-b-2 border-zinc-700 justify-between">
    <div class="flex">
        <a href="/"><h1 class="text-zinc-100 text-4xl atkinson-hyperlegible-regular"><span class="">{title.split(".")[0]}</span><span class="font-bold">{title.split(".")[1]}</span></h1></a>
        <div class="lg:flex ml-12 items-center gap-4 hidden">
            <Topbarbtn text={localize("contact")} url="/contact"/>
            <Topbarbtn text={localize("students")} url="/students"/>
            <Topbarbtn text={localize("resources")} url="/resources"/>
            <Topbarbtn text={localize("archives")} url="/archives"/>
        </div>
    </div>
    <button onclick={(e) => {toggle();props.click?.(e)}} class="bg-zinc-700 px-4 text-zinc-100 rounded-lg font-bold cursor-pointer hover:bg-zinc-600"><i class="bi bi-globe-central-south-asia"></i> {lang}</button>
</header>