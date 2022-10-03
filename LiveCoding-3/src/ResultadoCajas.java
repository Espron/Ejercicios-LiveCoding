import java.util.Scanner;

public class ResultadoCajas {

	public static void main(String[] args) {
		//Ingresar datos
		Scanner sc = new Scanner(System.in);
		//Solicita ingresar cantidades
		System.out.println("Ingresa el número de mangos: ");
	    int mangos = sc.nextInt();
	    System.out.println("Ingresa el número de naranjas");
	    int naranjas = sc.nextInt();
	    MangosNaranjas mangosNaranjas = new MangosNaranjas(mangos, naranjas);
	    
	    // Imprime el número máximo de cajas
		mangosNaranjas.resultadoMaxCajas(mangos, naranjas);
		mangosNaranjas.reparto(mangos, naranjas);
		
	}

} // ResultadoCajas
