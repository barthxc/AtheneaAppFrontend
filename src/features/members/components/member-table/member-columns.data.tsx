import type { ColumnDef } from "@tanstack/react-table";

import { capitalizeString } from "@/features/core/utils";
import { reverseDate } from "@/features/core/utils/reverseDate";

import type { Members } from "@/features/members/types";
import { MemberTableCellAction } from "@/features/members/components";

export const memberColumns: ColumnDef<Members>[] = [
  {
    id: "select",
    header: "",
    accessorFn: (row) => row.bankInfo.paymentDate,
  },
  {
    accessorKey: "memberNumber",
    header: "N° Socio",
  },
  {
    accessorKey: "name",
    header: "Nombre",
    cell: ({ row }) => capitalizeString(row.getValue("name")),
  },
  {
    accessorKey: "lastName",
    header: "Apellido",
    cell: ({ row }) => capitalizeString(row.getValue("lastName")),
  },
  {
    accessorKey: "identificationNumber",
    header: "DNI",
  },
  {
    accessorKey: "phone1",
    accessorFn: (row) => row.phoneInfo.phone1,
    header: "Teléfono 1",
  },
  {
    accessorKey: "phone2",
    accessorFn: (row) => row.phoneInfo.phone2,
    header: "Teléfono 2",
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => (row.getValue("status") as string).toUpperCase(),
  },
  {
    accessorKey: "paymentDate",
    accessorFn: (row) => row.bankInfo.paymentDate,
    header: "Fecha de pago",
    cell: ({ row }) => {
      const paymentDate = row.getValue("paymentDate") as string;
      const formatted = reverseDate(paymentDate);
      return formatted;
    },
  },
  {
    accessorKey: "paymentMethod",
    accessorFn: (row) => row.bankInfo.paymentMethod,
    header: "Método de pago",
    cell: ({ row }) => (row.getValue("paymentMethod") as string).toUpperCase(),
  },
  {
    id: "actions",
    cell: ({ row }) => <MemberTableCellAction data={row.original} />,
  },
];
