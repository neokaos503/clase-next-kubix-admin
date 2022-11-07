import Header from "@components/header";

export default function MainLayout({children}) {
    return(
<>
<div className="min-h-full">
 
<main>
   <Header/>
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
{children}
    </div>
   
</main>

</div>
</>
    );
  
}