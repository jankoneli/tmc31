<script>
    import Topbar from "./topbar.svelte";
    let welcome = "Welcome to.TMC #31".split(".");
    let description = {
        "en":"Official hub for Tirtamarta Cinere Batch 31. Made by the students, for the students. Completely free and open-source.",
        "id":"Website untuk Angkatan ke-31 Tirtamarta Cinere. Dibuat oleh siswa, untuk siswa. Gratis selamanya."
    }
    let browse = {
        "en": "Browse TMC31 Archive",
        "id": "Jelajahi Arsip TMC31"
    }
    let lang = $state("en");
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
    *{
        font-family: "Atkinson Hyperlegible", sans-serif;
    }
</style>
<Topbar click={toggle}/>
<main class="lg:p-12 py-24 bg-blue-900">
    <div class="lg:flex-row flex-col py-12 lg:py-36 flex justify-between">
        <div class="flex md:justify-start justify-center">
            <img src="tmclogo.png" alt="" srcset="" class="lg:min-w-160 w-100">
        </div>
        <div class="lg:p-24 p-6 text-zinc-100 gap-4 flex flex-col">
            <h1 class="text-6xl lg:text-right">{welcome[0]} <span class="font-bold underline">{welcome[1]}</span></h1>
            <p class="lg:text-2xl text-xl text-zinc-300 lg:text-right">
                {@html description[lang]}
            </p>
            <div class="flex lg:justify-end justify-start">
                <a href="/archives" class="bg-zinc-100 p-4 py-2 text-blue-900 font-bold hover:bg-zinc-300 text-3xl cursor-pointer">{browse[lang]}</a>
            </div>
        </div>
    </div>
</main>
<title>Welcome to TMC31 - Official hub for TMC Batch 31</title>